import React from 'react'
import { Card, CardBody } from 'reactstrap'

export default function CardCom2() {
  return (
    <div>
        <Card className="rounded-xl p-0 h-[250px] w-[170px]">
            <img
              className="h-[190px] rounded-xl m-2 hover:scale-125 transition-transform duration-700 cursor-pointer"
              alt="Sample"
              src="https://veirdo.in/cdn/shop/files/MicrosoftTeams-image_c45a2b3f-666c-4ee6-ae2e-e17fb5753c66.png?v=1707460692"
            />
            <CardBody className="p-0">
              <div className="border-t border-gray-300">
                <div className=" hover:text-gray-400 font-bold italic flex justify-center items-center cursor-pointer">
                  Disney
                </div>
              </div>
            </CardBody>
          </Card>
    </div>
  )
}
