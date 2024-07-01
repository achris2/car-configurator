import CarConfigurator from "@/components/car-configurator";
import WsComponent from "@/components/ws-component";

type Props = {}

export default function Page({ }: Props) {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <CarConfigurator />
        {/* <div className="flex-1 lg:flex-[2] flex justify-center items-center sm:flex-[1]">
          <div className="relative w-full h-[50vh] lg:h-full">
          
          </div>
        </div>
        <div className="flex-1 lg:flex-[1] flex flex-col justify-center py-4 items-center bg-slate-50">
          <div>
          <WsComponent />
          </div>

        </div> */}
      </div>
    </>
  );

}
