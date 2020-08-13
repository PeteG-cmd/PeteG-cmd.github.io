import React from 'react'

const Clients = () => {


  return (
    <>

      <div className="clientsPage" id='clientsPage'>
        <h1 className='title has-text-centered'>Freelance Software Development - Wild Eye Photos</h1>
        <div className="subtitle has-text-centered">
          <a className='siteLink' href="https://www.wildeyephotos.co.uk">Visit the Site</a>
        </div>
        <div className="columns">
          <div className="column is-4">

            <p className='clientProjectDescription'>For this client I designed and deployed a new e-commerce platform for their photo gallery, with the new site launched in August 2020.</p>
            <p className='clientProjectDescription'>Built with Mongo, Express, React & Node, the site offers additional functionality for their customers, and follows DRY and SOLID design principles. </p>
            <p className='clientProjectDescription'>The main challenge with this project was balancing the need for high quality images with performance and cost considerations.</p>

          </div>
          <div className="column is-8">
            <figure className='clientHomePage'>
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596471370/Home/Screenshot_2020-08-03_at_17.06.28_jthxtb.png" alt="" />
            </figure>

          </div>
        </div>

      </div>



      <p className="subtitle has-text-centered">Main Site Features</p>

      <div className="features">

        <div>
          <p className='featureMain'>Automated photo handling with asynchronous upload</p>
          <p>Photo upload is handled automatically, and on selection are adjusted, compressed, tagged and watermarked. They are then stored using a CDN (Cloudinary) with the image URL added to the database.</p>
        </div>
        <div>
          <p className='featureMain'>Responsive Image Delivery</p>
          <p>In order to reduce the data transfer needed for each page the site uses responsive images and client hints when possible to reduce asset sizes and improve FCP times.</p>
        </div>
        <div>
          <p className='featureMain'>Efficient database design</p>
          <p>The MongoDB has been designed to allow minimal data to be stored and pricing and orders to be calculated based on rule sets. This also allows much quicker price and product updates.</p>
        </div>

        <div>
          <p className='featureMain'>Webhooks used to integrate  payment, order and delivery processing</p>
          <p>Information is displayed using custom designed UX. Once a payment charge has been confirmed, orders can then be despatched, with order and tracking information automatically emailed to the customer.</p>
        </div>
        <div>
          <p className='featureMain'>Photo Frame Visualisation and Sales</p>
          <p>In one click customers are able to select a frame and see it visualised around the selected image.</p>
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
        <figure>
          <img src="https://res.cloudinary.com/enemigos/image/upload/v1596471367/Home/Screenshot_2020-08-03_at_17.05.46_xrtb2y.png" alt="" />
        </figure>
        <figure>
          <img src="https://res.cloudinary.com/enemigos/image/upload/v1596471370/Home/Screenshot_2020-08-03_at_17.08.13_w3nk5w.png" alt="" />
        </figure>
        <figure>
          <img src="https://res.cloudinary.com/enemigos/image/upload/v1596471367/Home/Screenshot_2020-08-03_at_17.15.12_zjhxnb.png" alt="" />
        </figure>
        <figure>
          <img src="https://res.cloudinary.com/enemigos/image/upload/v1596471366/Home/Screenshot_2020-08-03_at_17.10.18_gkyabz.png" alt="" />
        </figure>
      </div>

      <div className="subtitle has-text-centered">
        <a className='siteLink' href="https://www.wildeyephotos.co.uk">Visit the Site at https://www.wildeyephotos.co.uk</a>
      </div>

    </>
  )

}

export default Clients