import CarConfigurator from "@/components/car-configurator";

type Props = {}

export default function Page({ }: Props) {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <CarConfigurator />
      </div>
    </>
  );

}
