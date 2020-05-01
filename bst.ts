
export interface Payload {  
  id: number
  rank: number
}

export default class BinarySearchTree {
  private _data: Payload
  private _left?: BinarySearchTree
  private _right?: BinarySearchTree

  constructor(_data: Payload) {
    this._data = _data
  }

  public insert(value: Payload): this {
    if(value.id < this.data.id){
      return this.insertLeft(value)
    }else{
      return this.insertRight(value)
    }
  }

  public each(fn: (data: Payload) => void): void {
    if (this._left) {
      this._left.each(fn)
    }
    fn (this._data)
    if (this._right) {
      this._right.each(fn)
    }
  }

  public get data(): Payload {
    return this._data
  }

  public get left(): BinarySearchTree {
    return this._left!
  }

  public get right(): BinarySearchTree {
    return this._right!
  }

  public countRank(benchmark: number): number{
    
    var leftCount: number = 0
    var rightCount: number = 0
    var thisCount: number = 0
    
    //count left
    if(this.left){
      leftCount = this.left.countRank(benchmark)
    };
    if(this.right){
      rightCount = this.right.countRank(benchmark)
    };
    if(this.data.rank > benchmark){
      thisCount = 1
    }

    return leftCount + rightCount + thisCount;
  }

  private insertLeft(value: Payload): this {
    if (!this._left) {
      this._left = new BinarySearchTree(value)
    } else {
      this._left.insert(value)
    }
    return this
  }

  private insertRight(value: Payload): this {
    if (!this._right) {
      this._right = new BinarySearchTree(value)
    } else {
      this._right.insert(value)
    }
    return this
  }



}
