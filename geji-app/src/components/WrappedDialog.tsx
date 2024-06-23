"use client";
import React, { MouseEventHandler } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core'

interface DialogButtonProps {
  title:string,
  icon?:IconProp,
  onClick?:MouseEventHandler<HTMLButtonElement>
}

interface WrappedDialogProps  {
  triggerButtonProps:DialogButtonProps,
  title :string,
  description: string,
  saveButtonProps?: DialogButtonProps
  children?: React.ReactNode
}


const WrappedDialog:React.FC<WrappedDialogProps> = React.forwardRef(
  function d({
    triggerButtonProps,
    title,
    description,
    children,
    saveButtonProps,
  }, __ref:React.Ref<HTMLDivElement>) {
  const {icon:triggerBtnIcon, title:triggerBtnTitle} = triggerButtonProps,
        {icon:saveBtnIcon, title:saveBtnTitle, onClick:onSaveBtnClick} = saveButtonProps || {};
    
    return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          {triggerBtnIcon && <FontAwesomeIcon icon={triggerBtnIcon}></FontAwesomeIcon>}
          {triggerBtnTitle}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          {saveButtonProps && <Button type="submit" onClick={onSaveBtnClick}>
             {saveBtnIcon && <FontAwesomeIcon icon={saveBtnIcon}></FontAwesomeIcon>}
            {saveBtnTitle}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
})




export default WrappedDialog;
