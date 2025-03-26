type Pair<T1, T2> = [T1, T2]

type Line = Pair<string, string> | string // key:value 组成的行或者单纯的字符串
type HeaderLine = Array<Line>

enum LineType {
    Line = 'Line',
    HeaderLine = 'HeaderLine'
}

interface Header {
    name: string, // 姓名
    lines: Array<HeaderLine>
}

interface GroupSection {
    leftTop?: string | null,
    rightTop?: string | null,
    leftBottom?: string | null,
    rightBottom?: string | null,
    lines: Array<Line> // 支持HTML样式
}

interface Group {
    title: string,
    sections: Array<GroupSection>,
}

type Body = Array<Group>;

interface CV {
    header: Header,
    body: Body,
}



export type { Line, HeaderLine };
export type { CV, Header, Body, Group, GroupSection };
export { LineType };