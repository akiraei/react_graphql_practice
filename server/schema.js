const graphql = require('graphql');


const Cart = require('./models/Cart');
const Consumer = require('./models/Consumer');
const Delivery = require('./models/Delivery');
const Merchandise = require('./models/Merchandise');
const Order = require('./models/Order');
const Provider = require('./models/Provider');


const objType = graphql.GraphQLObjectType
const strType = graphql.GraphQLString
const schemaType = graphql.GraphQLSchema
const idType = graphql.GraphQLID
const intType = graphql.GraphQLInt
const listType = graphql.GraphQLList
const nonNullType = graphql.GraphQLNonNull


const CartType = new objType({
    name: 'Cart',
    fields: () => ({
        id: {type: idType},
        consumer: {
            type: ConsumerType,
            resolve(parent, args){
                return Consumer.findById(parent.consumerId)
            }
        },
        orders: {
            type: OrderType,
            resolve(parent, args){
                return Order.find({consumerId: parent.id})
            }
        }
    })
})


const ConsumerType = new objType({
    name: 'Consumer',
    fields: () => ({
        id: {type: idType},
        name: {type: strType},
        phone: {type: intType},
        address: {type: strType},
        cart: {
            type: CartType,
            resolve(parent, args){
                return Cart.find({ consumerId: parent.id })
            }
        },
        delivery: {
            type: DeliveryType,
            resolve(parent, args){
                return Delivery.find({ consumerId: parent.id })
            }
        }
    })
})


const MerchandiseType = new objType({
    name: 'Merchandise',
    fields: () => ({
        id: {type: idType},
        name: {type: strType},
        price: {type: intType},
        summary: {type: strType},
        quantity: {type: intType},
        image: {type: strType},
        provider: {
            type: ProviderType,
            resolve(parent, args){
                return Provider.findById(parent.providerId)
            }
        }
    })
})




const DeliveryType = new objType({
    name: 'Delivery',
    fields: () => ({
        id: {type: idType},
        consumer: {
            type: ConsumerType,
            resolve(parent, args){
                return Consumer.findById(parent.consumerId)
            }
        },
        orders: {
            type: OrderType,
            resolve(parent, args){
                return Order.find({consumerId: parent.id})
            }
        }
    })
})




const OrderType = new objType({
    name: 'Order',
    fields: () => ({
        id: {type: idType},
        quantity: {type: intType},
        cart: {
            type: CartType,
            resolve(parent, args){
                return Cart.findById(parent.cartId)
            }
        },
        Delivery: {
            type: DeliveryType,
            resolve(parent, args){
                return Delivery.findById(parent.deliveryId)
            }
        },
        merchandise: {
            type: MerchandiseType,
            resolve(parent, args){
                return Merchandise.findById(parent.merchandiseId)
            }
        }
    })
})




const ProviderType = new objType({
    name: 'Provider',
    fields: () => ({
        id: {type: idType},
        name: {type: strType},
        phone: {type: intType},
        address: {type: strType},
        merchandises: {
            type: new listType(MerchandiseType),
            resolve(parent, args){
                return Merchandise.find({ merchandiseId: parent.id });
            }
        }
    })
})




const RootQuery = new objType({
    name: 'RootQueryType',
    fields: {
        provider: {
            type: ProviderType,
            args: { id: { type: idType }},
            resolve (parent, args){
                return Provider.findById(args.id)
            }
        },
        consumer: {
            type: ConsumerType,
            args: {id : {type: idType}},
            resolve(parent, args){
                return Consumer.findById(args.id)
            }
        },
        merchandise: {
            type: MerchandiseType,
            args: { id: {type: idType}},
            resolve (parent, args) {
                return Merchandise.findById(args.id)
            }
        },
        cart: {
            type: CartType,
            args: {id : {type: idType}},
            resolve(parent, args){
                return Cart.findById(args.id)
            }
        },
        order: {
            type: OrderType,
            args: {id : {type: idType}},
            resolve(parent, args){
                return Order.findById(args.id)
            }
        },
        delivery: {
            type: DeliveryType,
            args: {id : {type: idType}},
            resolve(parent, args){
                return Delivery.findById(args.id)
            }
        },
        providers: {
            type: new listType(ProviderType),
            resolve(parent, args){
                return Provider.find({})
            }
        },
        consumers: {
            type: new listType(ConsumerType),
            resolve(parent, args){
                return Consumer.find({})
            }
        },
        merchandises: {
            type: new listType(MerchandiseType),
            resolve(parent, args){
                return Merchandise.find({})
            }
        },
        deliverys: {
            type: new listType(DeliveryType),
            resolve(parent, args){
                return Delivery.find({})
            }
        },
        orders: {
            type: new listType(OrderType),
            resolve(parent, args){
                return Order.find({})
            }
        },
        carts: {
            type: new listType(CartType),
            resolve(parent, args){
                return Cart.find({})
            }
        }
    }
})



const Mutation = new objType({
    name: 'Mutation',
    fields: {
        addConsumer: {
            type: ConsumerType,
            args: {
                name: { type: strType},
                phone: {type: intType},
                address: {type: strType}
            },
            resolve(parent, args){
                const consumer = new Consumer({
                    name: args.name,
                    phone: args.phone,
                    address: args.address
                })
                return consumer.save()
            }
        },
        addProvider: {
            type: ProviderType,
            args: {
                name: { type: strType},
                phone: {type: intType},
                address: {type: strType}
            },
            resolve(parent, args){
                const provider = new Provider({
                    name: args.name,
                    phone: args.phone,
                    address: args.address
                })
                return provider.save()
            }
        },
        addMerchandise: {
            type: MerchandiseType,
            args: {
                name: { type: strType},
                price: { type: intType},
                summary: {type: strType},
                quantity: {type: intType},
                providerId: {type: idType},
                image: {type: strType}
            },
            resolve(parent, args){
                const merchandise = new Merchandise({
                    name: args.name,
                    price: args.price,
                    summary: args.summary,
                    quantity: args.quantity,
                    providerId: args.providerId,
                    image: args.image
                })
                return merchandise.save()
            }
        },
        addOrder: {
            type: OrderType,
            args: {
                quantity: {type: intType},
                merchandiseId: {type: idType},
                cartId: {type: idType},
                deliveryId: {type: idType}
            },
            resolve(parent, args){
                const order = new Order({
                    quantity: args.quantity,
                    merchandiseId: args.merchandiseId,
                    cartId: args.cartId,
                    deliveryId: args.deliveryId
                })
                return order.save()
            }
        },
        addCart: {
            type: CartType,
            args: {
                consumerId: {type: idType}
            },
            resolve(parent, args){
                const cart = new Cart({
                    consumerId: args.consumerId
                })
                return cart.save()
            }
        },
        addDelivery: {
            type: DeliveryType,
            args: {
                consumerId: {type: idType}
            },
            resolve(parent, args){
                const delivery = new Delivery({
                    consumerId: args.consumerId
                })
                return delivery.save()
            }
        }
    }
})


module.exports = new schemaType({
    query: RootQuery,
    mutation: Mutation
});