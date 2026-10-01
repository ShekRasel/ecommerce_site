import { cn } from "@/lib/utils";

interface Props {
    children : React.ReactNode;
    className? : string;
}

function Title({children,className} : Props) {
  return (
    <div className={cn('text-3xl font-semibold tracking-[-0.035em] text-neutral-950',className)}>
        {children}
    </div>
  )
}

export default Title
