export class Setting {
    name: string;
    description: string;
    category: string;

    constructor(name: string, description: string, category: string) {
        this.name = name;
        this.description = description;
        this.category = category;
    }
}
