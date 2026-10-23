

const Button = (p) => {
    return (
        <>
            <a href="{p.info['link']}" 
            className="w-max rounded-full block border-primary-100 bg-primary-100 px-6 py-2.5 font-semibold uppercase shadow-[2px_3px_4px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300">{p.info["text"]}</a>
        </>
    );
};

export default Button;