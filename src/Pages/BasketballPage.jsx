import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Fetch from '../Fetch'
import { Link } from 'react-router-dom'

function BasketballPage() {
  const { loading, error, data } = Fetch('http://localhost:1337/api/basketballs?populate=*')
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( </p>

  return (
    <>
      <Navbar />
      <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 p-5'>
        {data.data.map((basketball) => (
          <Link to={`/basketballDetails/${basketball.id}`} key={basketball.id}> 
          <div className='col'>
              <div className="card">
                  <img 
                    src={`http://localhost:1337${basketball.attributes.image.data.attributes.url}`} 
                    className="card-img-top" alt="..." />
                  <div className="card-body">
                      {/* <span className='d-flex justify-content-around'>
                          <p className="card-text"><small className="text-body-secondary">{basketball.date}</small></p>
                          <p className="card-text"><small className="text-body-secondary">By {basketball.writer}</small></p>
                      </span> */}
                      <h5 className="card-title">{basketball.attributes.title}</h5>
                      <p className="card-text">{basketball.attributes.body}</p>
                      {/* <a href="#" className="btn btn-info">Read More</a> */}
                  </div>
              </div>
          </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default BasketballPage
