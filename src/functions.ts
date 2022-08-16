export const elementFactory = (tipo: string, atributos:any, ...children: any[]) => {
    const element: HTMLElement | null = document.createElement(tipo);

    for(let key in atributos) {
        element?.setAttribute(key, atributos[key]);
    }

    children.forEach((child: any) => {
        if (typeof child === "string") {
            element?.appendChild(document.createTextNode(child));
        } else {
            element?.appendChild(child);
        }
    });

    return element;
}