import { TextBoxType } from "@/types";

const TextBox = ({tittle, body}: TextBoxType) => {
    return(
        <div className="flex gap-12 items-center md:mx-36 mx-14 mt-16 flex-col">
            <h2 className="text-7xl lg:text-6xl">
                {tittle}
            </h2>
            <p className="xl:text-2xl lg:text-lg text-3xl align-middle">
                {body}
            </p>
        </div>
    )
}; 
export default TextBox;