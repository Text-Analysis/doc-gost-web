import { IData } from '../types/actions/document';

export const changeTextSection = (
    structure: IData[],
    childName: string,
    value: string
) => {
    structure.map((block) => {
        if (block.children) {
            return changeTextSection(block.children, childName, value);
        } else {
            if (block.name === childName) {
                block.text = value;
                return;
            }
        }
    });
    return structure;
};
