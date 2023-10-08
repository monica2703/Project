export class Fourthlevelcategory {
    fourthlevelcategoryId: number;
    fourthLevelCategoryName: string;
    categoryid: number; 
    subcategoryId: number;
    subSubCategoryId: number;

    constructor(fourthlevelcategoryId: number, fourthLevelCategoryName: string,  categoryid: number, 
        subcategoryId: number,
        subSubCategoryId: number) {
        this.fourthlevelcategoryId =fourthlevelcategoryId;
        this.fourthLevelCategoryName = fourthLevelCategoryName;
        this.categoryid=categoryid; 
        this.subcategoryId=subcategoryId;
        this.subSubCategoryId=subSubCategoryId;
}
}
