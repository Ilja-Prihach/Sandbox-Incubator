// Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string,
// return its last element. It is guaranteed that there will be at least one argument
// and that single-argument arrays/lists/strings will not be empty.


function last(...args) {
    if (args.length === 1) {
        const arg = args[0];

        if (Array.isArray(arg) || typeof arg === 'string') {
            return arg[arg.length - 1]; // Возвращаем последний элемент
        }
        return arg;
    }
    return args[args.length - 1];
}