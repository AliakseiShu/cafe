export type CartItemsType = {
    id: string
    title: string
    price: number
    imageUrl: string
    type: string
    size: number
    count: number
}

export type InitialStateType = {
    totalPrice: number
    items: CartItemsType[]
}