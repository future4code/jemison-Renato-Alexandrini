# Exercícios da aula de Estrutura de dados

### Exercício 01:
#### De acordo com o funcionamento  dos métodos apresentados na imagem abaixo, qual é a estrutura que está sendo representada? 
```
add(element:any){
  this.queue.push(element);
}

remove(){
if(this.isEmpty())
  return 'Underflow';
  return this.queue.shift();
}
```
#### R)- O código acime apresenta uma estrutura de fila, pois os elementos são adicionados no final do array e com o .shift são removidos os primeiros elementos. 



### Exercício 02:
#### De acordo com o funcionamento  dos métodos apresentados na imagem abaixo, qual é a estrutura que está sendo representada? 
```
add(value: any){
  const node = new Node(value);
    if(!this.head){
      this.head = node;
    }else{
      let current = this.head;
        while (current.next){
          current = current.next
        }
        current.next = node;
    }
    this.size++;
}
remove(value:any){
  let current = this.head;
  letprevious = null;
  while(current){
    if(current.value === value){
      if(!previous){
        this.head = current.next;
      }
      this.size--;
      return true
    }
      previous = current;
      current = current.next;
  }
  return false
}
``` 
#### R)- O código acime apresenta uma estrutura de lista encadeada, pois além de não utilizar nenhuma função de array, existe uma estrutura de nó onde um elemento é atrelado ao
#### próximo elemnto para criarmos uma ordem nesta fila.




### Exercício 03:
#### De acordo com o funcionamento  dos métodos apresentados na imagem abaixo, qual é a estrutura que está sendo representada? 
```
add(element:any){
  this.stack.push(element);
}

remove(){
  if(this.isEmpty())
    return 'Underflow';
  return this.stack.pop();  
}
```
#### R)- O código acime apresenta uma estrutura de pilha, pois os elementos são adicionados no final do array e com o .pop são removidos os primeiros elemntos do array, ou os que foram adicionados por último. 
