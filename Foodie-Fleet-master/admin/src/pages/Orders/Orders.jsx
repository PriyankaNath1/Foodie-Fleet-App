import React from 'react'
import './Orders.css'
import { useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'
import { useEffect } from 'react';
import {assets}  from '../../assets/assets'

const Orders = ({url}) => {

  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async ()=>{
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      // console.log(response.data);
      // console.log(orders)
    } else {
      toast.error("Error");
    }
  }

  const statusHandler = async (event, orderId) =>{
    // console.log(event);
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders()
    } else {
      
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[])

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index)=>(
          <div className="order-item" key={index}>
            <img src={assets.parcel_icon} alt="parcel icon" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item,index)=>{
                  if(index===order.items.length - 1){
                    return item.name + " x " + item.quantity;
                  }
                  else{
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className="order-item-address">
              <p>{order.address.street + ", "}</p>
              <p>{order.address.city + ", " + order.address.state+", " + order.address.country+", "+order.address.pinCode}</p>
              </div>
              <p className="order-item-phn">
                {order.address.phone}
              </p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event, order._id)} value={order.status}>
              <option value="Food Precessing">Food Precessing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
