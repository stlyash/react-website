import React from 'react'

import PropTypes from 'prop-types'

export const ProjectCards = props => {

  return (
    <div className='col-lg-4 col-md-12' style={{borderRadius:"0.5cm"}}>
        <div className="card myposter" style={{margin:"0.5cm",backgroundColor:"#f2f2f2",
        borderRadius:"0.5cm"}}>
        <img style={{borderRadius:"0.5cm 0.5cm 0.2cm 0.2cm"}} src={props.project.image} className="card-img-top" alt={props.project.title}/>
        <div className="card-body">
            <h5 className="card-title">{props.project.title}</h5>
            <p className="card-text">{props.project.desc}</p>
            <a style={{fontSize:"0.9em"}} href={props.project.link} 
            target='_blank' rel="noreferrer" className="btn  btn-outline-primary">
              Link 🔗
              </a>
        </div>
        </div>
    </div>
  )
}

ProjectCards.propTypes = {
  myObjectProp: PropTypes.shape({
    key1: PropTypes.string,
    key2: PropTypes.string,
    key3: PropTypes.string,
    key4: PropTypes.string,
    key5: PropTypes.string
    // Add more PropTypes for the specific keys and their types
  })
};