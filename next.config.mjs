import nextIntl from 'next-intl';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);

// /** @type {import('next').NextConfig} */
// const nextConfig = {};
//
// import path from 'path';
//
// export default {
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//         // Adiciona um novo rule para lidar com arquivos .wav
//         config.module.rules.push({
//         test: /\.(wav|mp3)$/i,
//         use: [
//             {
//             loader: 'file-loader',
//             options: {
//                 publicPath: '/_next/static/sounds', // Caminho público para os arquivos de som
//                 outputPath: path.join(config.output.path, 'static/sounds'), // Caminho de saída dos arquivos de som
//                 name: '[name].[ext]', // Nome do arquivo de saída
//                 esModule: false,
//             },
//             },
//         ],
//         });
//
//         return config;
//     },
// };
