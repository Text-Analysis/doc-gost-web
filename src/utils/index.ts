import { IData } from '../store/types';

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
