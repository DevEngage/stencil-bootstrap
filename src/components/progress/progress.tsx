import {Component, Prop} from '@stencil/core';

export interface ISTBProgress {
  title?: string;
  min?: number;
  max?: number;
  current: number;
  classes?: string;
}

@Component({
  tag: 'stb-progress',
  host: {
    theme: 'progress',
  }
})
export class StbProgress {

  @Prop() current: number | ISTBProgress | ISTBProgress[] = 0;
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() title: string = '';
  @Prop() classes: string = '';

  convertToInt(str): number {
    str = str + '';
    str = str.replace('$', '');
    str = str.replace(',', '');
    str = str.replace('*', '');
    return parseInt(str);
  }

  calcProgress(bar: ISTBProgress) {
      let valueInt = this.convertToInt(bar.current);
      let maxInt = this.convertToInt(bar.max || this.max);
      return (valueInt / maxInt) * 100;
  }

  renderBar(bar: ISTBProgress | any) {
    const calculated = this.calcProgress(bar);
    return (
      <div
        class={`progress-bar ${bar.classes || ''}`}
        role="progressbar"
        style={{width: `${calculated}%`}}
        aria-valuenow={bar.current}
        aria-valuemin={bar.min || this.min}
        aria-valuemax={bar.max || this.max}
      >{bar.title || ''}</div>
    );
  }

  render() {
    if (typeof this.current === 'number') {
      return this.renderBar({
        title: this.title,
        current: this.current,
        min: this.min,
        max: this.max,
        classes: this.classes
      });
    } else if (typeof this.current === 'object' && this.current['length']) {
      const bars = [];
      for (let index in this.current) {
        const bar = this.current[index];
        bars.push(this.renderBar(bar));
      }
      return bars;
    } else if (typeof this.current === 'object') {
      return this.renderBar(this.current);
    }
  }
}
