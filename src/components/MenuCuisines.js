import Recipes from "./Recipes"
    export default function MenuCuisines({cousineTitle}){
    return(
        <>
        <h1>
            {cousineTitle[0]}
        </h1>
        <Recipes/>
        <Recipes/>
        <Recipes/>
        <h1>
            {cousineTitle[1]}
        </h1>
        <Recipes/>
        <Recipes/>
        <Recipes/>
        <h1>
            {cousineTitle[2]}
        </h1>
        <Recipes/>
        <Recipes/>
        <Recipes/>
        </>
    )
}