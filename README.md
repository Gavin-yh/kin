### kin组件库
> 2020不一样的一年，眼看TS如火如荼，咱是不是也得应个景。

#### 项目简介
> 这是一个即兴demo，目的就是为了防止人生锈

#### 使用到的库
* normalize.css
* classnames(@types/classnames)

#### interface的妙用
```
Button

interface ButtonProps {
  className?: string;
  disabled?: boolean
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
  href?: string;
}

Menu

export interface MenuProps {
    activeIndex?: number;
    className?: string;
    style?: React.CSSProperties;
    mode?: ModeType;
    onSelect?: OnSelectType;
}
```

##### 待续。。。。。