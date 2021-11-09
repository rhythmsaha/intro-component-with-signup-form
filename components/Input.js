const Input = ({ type, placeholder, value, onChange, error }) => {
    return (
        <div>
            <div className="relative">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full outline-none border rounded-md my-1 p-4 text-sm focus:border-indigo-900 ${
                        error &&
                        "pr-8 border-red-400 placeholder-red-400 focus:border-red-400 text-red-400"
                    }`}
                />

                {error && (
                    <span className="absolute top-1/2 -translate-y-1/2 right-3 h-5 ">
                        <img
                            src="/images/icon-error.svg"
                            alt=""
                            className="object-contain h-full"
                        />
                    </span>
                )}
            </div>
            <div className="text-red-400 text-right text-xs mb-2 px-2 italic">
                {error && error}
            </div>
        </div>
    );
};

export default Input;
