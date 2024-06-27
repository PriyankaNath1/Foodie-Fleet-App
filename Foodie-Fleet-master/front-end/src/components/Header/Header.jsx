import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <img src='/header_img.png' alt="" />
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat, voluptatum nihil maiores provident incidunt, laudantium enim illo omnis adipisci obcaecati molestiae officia blanditiis vero?</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
