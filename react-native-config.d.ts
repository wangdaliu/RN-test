declare module 'react-native-config' {
    export interface NativeConfig {
        // App
        PRODUCT_NAME: string
        API_ROOT: string
    }

    export const Config: NativeConfig
    export default Config
}
