import { useNavigate } from "react-router"
import { Order, OrderItem } from "../../../types/orderTypes"
import { Avatar } from "@mui/material"
import { ElectricBolt } from "@mui/icons-material"
import { teal } from "@mui/material/colors"
import { formatDate } from "../../util/fomateDate"
import * as React from "react"

interface OrderItemCardProps{
    item:OrderItem,
    order:Order
}
const OrderItemCard:React.FC<OrderItemCardProps> = ({item,order}) => {
    
    const navigate = useNavigate()



    return (
        <div onClick={() => navigate(`/account/orders/${order._id}/item/${item._id}`)} className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>

            <div className='flex items-center gap-3'>
                <div>
                    <Avatar sizes='small' sx={{ bgcolor: teal[500] }}>
                        <ElectricBolt />
                    </Avatar>

                </div>
                <div>
                    <h1 className='font-bold text-teal-600'>{order.orderStatus}
                    </h1>
                    <p>Arriving by {formatDate(order.deliverDate)}</p>
                </div>
            </div>
            <div className='p-5 bg-teal-50 flex gap-3 '>
                <div className=''>
                    <img className='w-[70px]'
                     src={item.product?.images[0]} alt="" />
                </div>
                <div className='w-full space-y-2'>
                    <h1 className='font-bold'>{item.product?.seller?.businessDetails?.businessName}
                    </h1>
                    <p>
                        {item.product.title}
                    </p>
                    <p><strong>size : </strong>
                        FREE</p>

                </div>


            </div>

        </div>
    )
}

export default OrderItemCard