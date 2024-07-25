import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Typography } from '@material-tailwind/react'
import React from 'react'
import image from '../../../../public/assets/Originals-Beige-Oversized-T-Shirt-Veirdo-6625.jpg'
import { BsHeartFill } from 'react-icons/bs'

export default function BestSeller() {
    var num =[1,2,3,4,5,6,7,8]
  return (
    <div className='mt-3'>
        <div className='text-center text-xl font-semibold uppercase w-full'>
            <h1>Our BestSellers</h1>
        </div>
        <div className='grid grid-cols-4 p-10 gap-2'>
        {num.map((i)=>{return(
            <div key={i} >
            <Card  className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                src={image}
                alt="ui/ux review check"
              />
              <div className="product-image-tag  product-image-tag  flex items-center absolute h-4 top-2 lg:top-4 p-[2px] lg:p-1 rounded-sm z-20 product-card-tag  left-[1%]  " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray" className="font-medium">
                  Wooden House, Florida
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-3 flex gap-2 items-center">
              <Button size="lg" fullWidth={true}>
                Add to Cart
              </Button>
              <BsHeartFill className='text-3xl cursor-pointer fill-red-500' />
            </CardFooter>
          </Card>
          </div>
        )
      })}
      </div>
      <div className='flex justify-center items-center w-full mb-6'>
        <Button className='border bg-[#00F092] p-5 text-black text-xl font-semibold max-w-[339px] w-full border-black shadow-[#FBB606] hover:shadow-[#FBB606] '>
          See More BestSellers
        </Button>
        </div>
    </div>
  )
}
