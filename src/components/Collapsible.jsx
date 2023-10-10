import { useRef, useState } from "react"
import "./components.css"

const Collapsible = ({title, children}) => {

    const contentRef = useRef()

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    const content = (
        <>
        
            <button type="button" className={`collapsible ${open ? "active": ""}`} onClick={toggle}>{title}</button>
            
            <div className="content-parent"
                ref={contentRef} style={open ? { maxHeight: contentRef.current.scrollHeight + "px" } : { maxHeight: "0px" }}
                >
                <div className="content">{children}</div>
            </div>

        </>
    )

    return content
}

export default Collapsible