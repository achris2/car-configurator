import Image from "next/image";
import red1 from "../../public/911/red/gt3-red1-wheel1.webp";
import * as React from "react"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 gap-4 px-4 py-4 h-full">
        <div className="flex justify-center items-center bg-blue-200">
          <div>
            <Image
              src={red1}
              alt="car"
            />
          </div>
        </div>
        <div className="h-full flex justify-center items-center bg-red-50">
          <div>
            <Button>
              Red
            </Button>
            <Button>
              Red
            </Button>
            <Button>
              Red
            </Button>
          </div>
        </div>
    </div>
    </>
)
}
