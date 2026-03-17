type ButtonProps  = {
    text: string ;
    variant?: "filled" | "outline";
}
export default function Button({
    text , 
    variant = "filled"
} : ButtonProps){
     const baseStyle =
    "rounded-xl px-4 py-2 font-medium transition";

  const styles =
    variant === "filled"
      ? "bg-sky-500 text-white hover:bg-sky-600"
      : "border border-sky-500 text-sky-500 hover:bg-sky-50";
  return <button className={`${baseStyle} ${styles}`}>{text}</button>;   
}