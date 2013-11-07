//
//  ViewController.m
//  WFF_20131105
//
//  Created by Snail on 5/11/13.
//  Copyright (c) 2013 Snail. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UIWebView *indexWebView;
@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    self.indexWebView.scrollView.bounces = NO;
    self.indexWebView.allowsInlineMediaPlayback = YES;
    self.indexWebView.mediaPlaybackRequiresUserAction = NO;
    [self.indexWebView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[NSString stringWithFormat:@"%@/index.html",[[NSBundle mainBundle] pathForResource:@"Content" ofType:@""]]]]];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
