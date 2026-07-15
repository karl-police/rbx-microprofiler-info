/**
 * Some terminology can be found here:
 * https://github.com/Roblox/libmp/blob/main/docs/api-reference.md
 */


/**
 * Color in 3-entry array RGB.
 */
type Color3Array = [number, number, number];


type TagBaseDocInfo = {
    DocInfo?: TagDocInfo;

    /**
     * Search Tags
     */
    Tags?: [string?];
}


type TagInfoEntry = TagBaseDocInfo & {
    /**
     * Name of the tag, that will also be the ID
     * The NameId, e.g. "something::test"
     */
    NameId: string;


    /**
     * If known, the Group this tag is part of.
     * e.g. LuaBridge for Script_
     */
    GroupId?: string;
    
    /**
     * Color if known.
     */
    Color: Color3Array;
}


type TagGroup = TagBaseDocInfo & {
    /**
     * Name of the group, e.g. "LuaBridge"
     */
    NameId: string;

    Color: Color3Array;
}




type TagDocInfo = {
    Description?: string;
}