/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
#include <stdlib.h>

typedef struct node{
    int info;
    struct node *next;
}node;
void push(node**tp,int num)
{
    node *p;
    p=(node *)malloc(sizeof(node));
    if(p==NULL)
    {
        printf("Memory allocation failed\n");
        exit(1);
    }
    else
    {
        p->info=num;
        p->next=*tp;
        *tp=p;
    }
    
}
void pop(node**tp)
{
    node *temp;
    temp=*tp;
    
        printf("Element popped  %d",temp->info);
        *tp= temp->next;
        free(temp);
    
}
void display(node *top)
{
    node *temp;
    temp=top;
    if(top==NULL)
    {
        printf("Stack is empty\n");
    }
    else
    {
        while(temp!=NULL)
        {
            printf("%d \n",temp->info);
            temp=temp->next;
        }
    }
}
int main()
{
    node *top=NULL;
    int ch;
    printf("Enter 1 for push 2 for pop 3 for display Enter 4 for exit \n");
    scanf("%d",&ch);
    while(1)
    {  
        switch(ch)
        
        {
            case 1:{
            int num=0;    
            printf("Enter element\n");
            scanf("%d",&num);
            push(&top,num);
            printf("\n Press 1 for push 2 for pop 3 for display Enter 4 for exit ");
            scanf("%d",&ch);}
            break;
            case 2:{
                if(top==NULL){printf("Emptyt stack");}
                else{
            pop(&top);
                }
            printf("\n Press 1 for push 2 for pop 3 for display Enter 4 for exit ");
            scanf("%d",&ch);}
            break;
            case 3:{
            display(top);
            printf("\n Press 1 for push 2 for pop 3 for display Enter 4 for exit ");
            scanf("%d",&ch);}
            break;
            case 4:{
                printf("\nExiting.....\n");
                exit(1);
            }break;
            default:{
                printf("\ninvalid input \n");}
                exit(1);
        }
    }
    return 0;
}