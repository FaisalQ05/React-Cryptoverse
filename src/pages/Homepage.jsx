import React from "react"
import { useGetCryptosQuery } from "../services/cryptoApi"

const Homepage = () => {
  const { data, isLoading, isSuccess, isError,error } = useGetCryptosQuery()
  console.log({ data, isLoading, isSuccess, isError,error })
  return (
    <div>
      <div>Homepage</div>
      <div></div>
    </div>
  )
}

export default Homepage
