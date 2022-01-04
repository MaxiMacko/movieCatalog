import React from 'react';
import TagsInput from "react-tagsinput";
import styled from 'styled-components';

const Tag = styled.span`
  background-color: brown;
  margin-left: 0.2rem;
  color: white;
`

const TagsStyledInput = styled.input`
  margin-left: 0.5rem;
`

const TagsWidget = (props: any) => {

  const defaultRenderTag = (renderTagProps: any) => {
    let {tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other} = renderTagProps
    return (
      <Tag key={key} {...other}>
          {getTagDisplayValue(tag)}
          {!disabled &&
            <button className={classNameRemove} onClick={() => onRemove(key)}>delete</button>
          }
      </Tag>
    )
  }

  const defaultRenderInput = (renderInputProps: any) => {
    let {onChange, value, addTag, ...other} = renderInputProps
    return (
      <TagsStyledInput type='text' onChange={onChange} value={value} {...other} />
    )
  }

  const defaultRenderLayout = (tagComponents:any, inputComponent: any) => {
    return (
      <div>
        <div>{inputComponent}</div>
        <div>{tagComponents}</div>
      </div>
    )
  }

  return (
    <div>
      <TagsInput
        value={props.actors}
        onChange={(tags: any) => {
          props.onChange(tags);
          console.log(tags)
        }}
        renderTag={defaultRenderTag}
        renderInput={defaultRenderInput}
        renderLayout={defaultRenderLayout}
      />
    </div>
  )
}

export default TagsWidget