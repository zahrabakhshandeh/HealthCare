import { TextBoxType } from "@/types";

const TextBox = ({tittle, body}: TextBoxType) => {
    return(
        <div className="flex justify-center items-center gap-2 m-10">
            <h2>
                {tittle}
            </h2>
            <p>
                {body}
            </p>
        </div>
    )
}; 
export default TextBox;