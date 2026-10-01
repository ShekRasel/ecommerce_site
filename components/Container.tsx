import { cn } from "@/lib/utils";

interface Props {
    children : React.ReactNode;
    className? : string;
}

const  Container = ({children, className}:Props) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1400px] px-5 py-3 sm:px-8 lg:px-10",className)}>
        {children}
    </div>
  )
}

export default Container
