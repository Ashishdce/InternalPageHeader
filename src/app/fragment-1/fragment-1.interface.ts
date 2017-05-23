export interface Fragment1Interface{
    module : Module, // can we keep it as any?
    content: Array<Contents>
}
//is it required as an interface?
interface Module{
    typeId: string,
    typeName: string,
    variantID: string,
    variantName: string
}

interface Contents{
    header1: string,
    content1: string,
    image: ImageSources
}

interface ImageSources{
    src1: string,
    src2: string,
    alt: string
}