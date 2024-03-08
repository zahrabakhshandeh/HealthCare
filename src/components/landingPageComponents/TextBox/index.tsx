import { TextBoxType } from "@/types";

const TextBox = ({tittle, body}: TextBoxType) => {
    return(
        <div className="flex justify-start gap-14 items-center mx-36 mt-16 flex-col">
            <h2 className="text-7xl lg:text-4xl">
                {tittle}
            </h2>
            <p className="xl:text-2xl lg:text-lg text-3xl align-middle">
                {body}
            </p>
        </div>
    )
}; 
export default TextBox;