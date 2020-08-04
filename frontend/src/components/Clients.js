import React from 'react'

const Clients = () => {


  return (
    <>

      <div className="clientsPage" id='clientsPage'>
        <h1 className='title has-text-centered'>Freelance - Wild Eye Photos</h1>
        <div className="subtitle has-text-centered">
          <a className='siteLink' href="https://www.wildeyephotos.co.uk">Visit the Site</a>
        </div>
        <div className="columns">
          <div className="column is-4">

            <p className='clientProjectDescription'>For this client I designed and deployed a new e-commerce platform for their photo gallery, with the new site launched in August 2020.</p>
            <p className='clientProjectDescription'>I built the site using Mongo, Express, React & Node. The site improves considerably on their current website and offers additional functionality for their customers, and allows them to promote and sell a larger range of products online, as we as streamlining the purchasing process. </p>
            <p className='clientProjectDescription'>The main challenge with this project was balancing the need for high quality images with performance and cost considerations.</p>

          </div>
          <div className="column is-8">
            <figure className='clientHomePage'>
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596471370/Home/Screenshot_2020-08-03_at_17.06.28_jthxtb.png" alt="" />
            </figure>

          </div>8
        </div>

      </div>



      <p className="subtitle has-text-centered">Main Site Features</p>

      <div className="features">

        <div>
          <p className='featureMain'>Automated Photo Preparation and Handling.</p>
          <p>Photo upload is handled automatically, and on selection are adjusted, compressed, tagged and watermarked. They are then stored using a CDN (Cloudinary) with the image URL added to the database.</p>
        </div>
        <div>
          <p className='featureMain'>Responsive Image Delivery</p>
          <p>In order to reduce the data transfer needed for each page, and to reduce the load on the CDN, the site uses responsive images and client hints when possible to reduce asset sizes and improve FCP times.</p>
        </div>
        <div>
          <p className='featureMain'>Payment, Order and Delivery Tracking</p>
          <p>The solution implements webhooks to keep track of the payment process. This information is then displayed using custom designed UX. Once a payment charge has been confirmed orders can then be despatched, with automated order and tracking information emailed to the customer.</p>
        </div>
        <div>
          <p className='featureMain'>Photo Frame Visualisation and Sales</p>
          <p>In one click customers are able to select a frame and see is visualised around the selected image. New frames can be uploaded by the website owner and be made immediately available across any needed product range.</p>
        </div>
        <div>
          <p className='featureMain'>Improved Payment Processing</p>
          <p>The site now fully integrates Stripe payment processing to accept all major credit and debit card payments.</p>
        </div>
        <div>
          <p className='featureMain'>Other Features </p>
          <p>Text compression,  Code splitting, lazy loading, enforced HTTPS, Atlas Cloud DB, Heroku.</p>
        </div>
      </div>

      <div className="clientImages">
        <img src="https://res.cloudinary.com/enemigos/image/upload/v1596471367/Home/Screenshot_2020-08-03_at_17.05.46_xrtb2y.png" alt="" />

        <img src="https://res.cloudinary.com/enemigos/image/upload/v1596471370/Home/Screenshot_2020-08-03_at_17.08.13_w3nk5w.png" alt="" />

        <img src="https://res.cloudinary.com/enemigos/image/upload/v1596471367/Home/Screenshot_2020-08-03_at_17.15.12_zjhxnb.png" alt="" />

        <img src="https://res.cloudinary.com/enemigos/image/upload/v1596471366/Home/Screenshot_2020-08-03_at_17.10.18_gkyabz.png" alt="" />
      </div>

      <div className="subtitle has-text-centered">
        <a className='siteLink' href="https://www.wildeyephotos.co.uk">Visit the Site at https://www.wildeyephotos.co.uk</a>
      </div>

    </>
  )

}

export default Clients