const path = require('path');

//webpack.config.js
module.exports = (env) => { // Ta funkcja jako parametr będzie zawierać środowisko, które przekażemy w CLI !!!!!
    return {
        mode: env || 'production', // dzięki zastosowaniu opcji env mamy większe możliwości modyfikacji 
        entry: './src/index.js', //wskazuje plik od którego zaczynamy proces kompilacji
        output: { // wskazuje na ścieżkę i nazwę pliku wejściowego
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
         module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [ //Parametr use to odpowiednik pojedynczego loader. Przyjmuje on listę loaderów, przez które musi przejść plik .css, aby stać się modułem.
                        {loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        }
    }
};