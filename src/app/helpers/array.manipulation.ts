import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root',
})
export class ArrayManipulation {

    /*
    * Get slices from an array providing array and size
    * 
    */
    getChunkFromArray(originArray: string[], chunkSize: number){
        let producerArrays: string[][] = []
        for (let i = 0; i < originArray.length; i += chunkSize){
            producerArrays.push(originArray.slice(i, i+chunkSize))
        }
        return producerArrays
    }
}