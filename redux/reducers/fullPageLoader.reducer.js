export default function fullPageLoader(fullPageLoader = false, action) {
    switch(action.type) {
        case 'SHOW_FULLPAGE_LOADER':
            return action.payload;
        default:
            return fullPageLoader;
    }
}