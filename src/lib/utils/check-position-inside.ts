export function useCheckPositionInside(x: number, y: number, element:HTMLElement){
    if(element){
    const elementRect = element.getBoundingClientRect()

    if(x>=elementRect.left&&x<=elementRect.right&&y>=elementRect.top&&y<=elementRect.bottom){
        return true
    }else return false
} else return null
}