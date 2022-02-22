import React from 'react'
import Footer from './props.jsx'
import Img from "./images/img.jpg"

const FloValue = () => {
  return (
    <div>
      <Footer  names={"jamshed"} full={"Shahid"} />
      <Footer img=""   names={"jams"} full={"Shahi"}  />

      <Footer img=""  names={"jamshed"} full={"Shah"}  />
      <Footer img=""   names={"jamshed"} full={"Shid"}  />

    </div>
  )
}

export default FloValue
