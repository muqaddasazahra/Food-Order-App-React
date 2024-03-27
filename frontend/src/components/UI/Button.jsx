export default function Button({children, textonly, className, ...props})
{   
    let cssClasses= textonly? "text-button" :"button";
    cssClasses+=" " + className;
    return <button className={cssClasses} {...props}>{children}</button>
}