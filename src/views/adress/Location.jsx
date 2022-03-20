// import {React} from 'react'
import PropTypes from 'prop-types'

function Location(props){

  console.log('location更新')
  return <div>{props.location}</div>
}

Location.propTypes={
  location:PropTypes.string
}

export default Location