import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    // if(value.length>8){
    //   return value.substring(0,10) + ' ...';
    // }else{
    //   return value;
    // }
    let newstr = value;
    if(args[0]){
      newstr+="."
    }
    if(args[1] === "quote"){
      newstr = "'"+newstr+"'"
    }else if(args[1] === "doublequote"){
      newstr = '"'+newstr+'"'
    }
    return newstr;
  }

}
